import Head from 'next/head'
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react'
import { Pokemon } from '../models/pokemon'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home() {

  var [pkmList, setPkmList] = useState([] as Pokemon[])
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)


  async function fetchPokemon() {
    var offset = page * 20
    var resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + offset)
    resp.json().then(resp => {
      var results: Pokemon[] = resp.results.map((pkm: Pokemon, idx: number) => {
        pkm.id = idx + 1 + offset
        pkm.imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(idx + 1 + offset).padStart(3, '0')}.png`
        return pkm
      })
      setPkmList(prev => [...prev, ...results])

      if (results.length === 0) {
        setHasMore(false)
      }

      setPage(prev => prev + 1)
    })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <>
      <Head>
        <title>Prokédex</title>
        <meta name="description" content="Prokédex web version" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <InfiniteScroll
          className='p-8 flex flex-wrap gap-4 justify-center'
          dataLength={pkmList.length}
          next={fetchPokemon}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {
            pkmList.map((pkm, idx) => {
              return <PokemonCard key={idx} id={pkm.id} name={pkm.name} imageURL={pkm.imageURL} />
            })
          }
        </InfiniteScroll>
      </main>
    </>
  )
}
