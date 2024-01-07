import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Input } from '../ui/input'
import { SearchInput } from './SearchInput'
import { ModeToggle } from '../ThemeToggle'
import GetGenre from '@/utils/getGenre'
import icon from '../../../public/assets/movies.jpg'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
      <Image
      src={icon}
      alt='logo'
      width={100}
      height={100}
      />
      </Link>
      <div className={styles.input_field}>
      <ModeToggle/>
      <SearchInput/>
      </div>
    </header>
  )
}

export default Header