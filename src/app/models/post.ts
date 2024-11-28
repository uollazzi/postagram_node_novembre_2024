export type Post = {
  _id: string
  date: string
  title: string
  author: string
  body: string
  hidden: boolean
}

export type PostDTO = {
  title: string,
  author: string,
  body: string,
  hidden: boolean
}
