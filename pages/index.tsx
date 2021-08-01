import Head from 'next/head'

// Styles
import styles from '../styles/Home.module.css'

// Components
import CodeEditor from '../components/codeeditor'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skyline Editor</title>
      </Head>

      {/* Code Editor */}
      <div className={styles.editor}>
        <Sidebar />
        <div className={styles.code}>
          <CodeEditor
            initialValue="# This program prints Hello, world!
print('Hello, world!')"
          />
        </div>
      </div>
    </div>
  )
}
