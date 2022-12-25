import React from 'react'

export default function Info({ configurations }) {
  const {
    config_battery: battery,
    config_camera: camera,
    config_cpu: cpu,
    config_ram: ram,
    config_screen: screen,
    config_selfie: selfie,
    config_system: system,
  } = configurations

  const listConfigs = [
    {
      id: 1,
      title: 'Pin',
      value: battery,
    },
    {
      id: 2,
      title: 'Camera sau',
      value: camera,
    },
    {
      id: 3,
      title: 'Camera trước',
      value: selfie,
    },
    {
      id: 4,
      title: 'CPU',
      value: cpu,
    },
    {
      id: 5,
      title: 'Ram',
      value: ram,
    },
    {
      id: 6,
      title: 'Màn hình (INCH)',
      value: screen,
    },
    {
      id: 7,
      title: 'Hệ điều hành',
      value: system,
    },
  ]

  return (
    <div className='w-full bg-white p-5 mb-5'>
      <h2 className='text-xl font-normal leading-normal mt-0 mb-2'>
        Thông số kỹ thuật
      </h2>
      <table className='border-collapse border border-slate-400 w-full'>
        <thead>
          <tr>
            <th className='border border-slate-300 bg-slate-200 p-2 w-[150px]'>
              Cấu hình
            </th>
            <th className='border border-slate-300 bg-slate-200 p-2'>
              Thông số chi tiết
            </th>
          </tr>
        </thead>
        <tbody>
          {listConfigs.map((item) => (
            <tr key={item.id}>
              <td className='border border-slate-300 p-2'>{item.title}</td>
              <td className='border border-slate-300 p-2'>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
