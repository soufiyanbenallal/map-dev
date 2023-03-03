import {motion} from 'framer-motion'
import classNames from 'classnames'
import {Header} from '@/components'
import { IPageLayout } from '@/interfaces'

export default function PageLayout({children, className}: IPageLayout) {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={classNames(className)}>
      <Header />
      {children}
    </motion.main>
  )
}
