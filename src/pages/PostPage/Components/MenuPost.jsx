import { Tabs } from 'antd'
import React from 'react'

const MenuPost = () => (
  <div>
    <Tabs defaultActiveKey='1'>
      <Tabs.TabPane tab='TIN MỚI' key='item-1'></Tabs.TabPane>
      <Tabs.TabPane tab='KHUYẾN MÃI' key='item-2'></Tabs.TabPane>
      <Tabs.TabPane tab='THỦ THUẬT' key='item-3'></Tabs.TabPane>
      <Tabs.TabPane tab='FOR GAMERS' key='item-4'></Tabs.TabPane>
      <Tabs.TabPane tab='VIDEO HOT' key='item-5'></Tabs.TabPane>
      <Tabs.TabPane tab='ĐÁNH GIÁ - TƯ VẤN' key='item-6'></Tabs.TabPane>
      <Tabs.TabPane tab='APP & GAME' key='item-7'></Tabs.TabPane>
      <Tabs.TabPane tab='SỰ KIỆN' key='item-8'></Tabs.TabPane>
    </Tabs>
  </div>
)
export default MenuPost
