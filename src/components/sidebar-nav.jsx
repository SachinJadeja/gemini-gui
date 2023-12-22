import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'

import AddIcon from '../../public/add.svg'
import StarIcon from '../../public/star.svg'

const Sidebar = () => (
          <aside id="sidebar" className="z-40 h-screen w-fit transition-transform" aria-label="Sidebar">
              <div className="flex h-full flex-col overflow-y-auto w-64 border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
                  <div href="#" className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                      <Image
                          src={StarIcon}
                          priority
                          alt='star icon'
                      />
                      <span className="ml-3 text-base font-semibold">Gemini PRO</span>
                  </div>
                  <ul className="space-y-2 text-sm font-medium">
                      <li className=' border-slate-200'>
                          <Link href={`/${uuidv4()}`} className="flex border-2 border-slate-500 items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700">
                              <Image 
                                src={AddIcon}
                                priority
                                alt='add icon'
                                />
                              <span className="ml-3 flex-1 whitespace-nowrap">New Chat</span>
                          </Link>
                      </li>
                  </ul>
              </div>
          </aside>
  )

export default Sidebar