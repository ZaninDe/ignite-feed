import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ZaninDe.png',
      name: 'Gabriel Zanin',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 🙋‍♂️' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto bem massa!' },
      { type: 'link', content: 'gabriel.developer/ignews' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Gabriel Zanin',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 🙋‍♂️' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto bem massa!' },
      { type: 'link', content: 'gabriel.developer/ignews' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Gabriel Zanin',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 🙋‍♂️' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto bem massa!' },
      { type: 'link', content: 'gabriel.developer/ignews' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
