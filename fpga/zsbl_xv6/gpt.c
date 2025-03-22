///////////////////////////////////////////////////////////////////////
// gpt.c
//
// Written: Jaocb Pease jacob.pease@okstate.edu 7/22/2024
//
// Purpose: Code to read GPT Partitions off of an SD card.
//
// 
//
// A component of the Wally configurable RISC-V project.
// 
// Copyright (C) 2021-23 Harvey Mudd College & Oklahoma State University
//
// SPDX-License-Identifier: Apache-2.0 WITH SHL-2.1
//
// Licensed under the Solderpad Hardware License v 2.1 (the
// “License”); you may not use this file except in compliance with the
// License, or, at your option, the Apache License version 2.0. You
// may obtain a copy of the License at
//
// https://solderpad.org/licenses/SHL-2.1/
//
// Unless required by applicable law or agreed to in writing, any work
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied. See the License for the specific language governing
// permissions and limitations under the License.
///////////////////////////////////////////////////////////////////////

#include "gpt.h"
#include "boot.h"
#include "uart.h"
#include <stddef.h>

int gpt_load_partitions() {
  BYTE lba1_buf[512];
  
  int ret = 0;
  print_time();
  println("Getting GPT information.");
  ret = disk_read(lba1_buf, 1, 1);

  gpt_pth_t *lba1 = (gpt_pth_t *)lba1_buf;

  print_time();
  println("Getting partition entries.");
  BYTE lba2_buf[512];
  ret = disk_read(lba2_buf, (LBA_t)lba1->partition_entries_lba, 1);

  // Load partition entries
  // For XV6, we'll use the first partition for the device tree
  // and the second partition for the XV6 kernel
  partition_entries_t *fdt = (partition_entries_t *)(lba2_buf);
  partition_entries_t *xv6 = (partition_entries_t *)(lba2_buf + 128);

  // Load device tree (still needed for hardware configuration)
  print_time();
  println_with_int("Loading device tree at: 0x", FDT_ADDRESS);
  ret = disk_read((BYTE *)FDT_ADDRESS, fdt->first_lba, fdt->last_lba - fdt->first_lba + 1);
  if (ret < 0) {
    print_uart("Failed to load device tree!\r\n");
    return -1;
  }

  // Load XV6 kernel
  print_time();
  println_with_int("Loading XV6 kernel at: 0x", XV6_ADDRESS);
  ret = disk_read((BYTE *)XV6_ADDRESS, xv6->first_lba, xv6->last_lba - xv6->first_lba + 1);
  if (ret < 0) {
    print_uart("Failed to load XV6 kernel!\r\n");
    return -1;
  }

  print_time();
  println("Done! Flashing LEDs and jumping to XV6...");

  return 0;
}
