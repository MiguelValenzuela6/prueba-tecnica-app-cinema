import type React from "react"
import { useRouter } from "next/router"
import { useGetMovieDetailsQuery } from "../../store/services/movieApi"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

const MovieDetails: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const {
    data: movie,
    isLoading,
    error,
  } = useGetMovieDetailsQuery(Number.parseInt(String(id)), {
    skip: !id,
  })

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error al cargar los detalles de la película</div>
  if (!movie) return null

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Botón de back arrow */}
      <button 
        onClick={() => router.back()} 
        className="flex items-center mb-4 text-blue-500 hover:text-blue-700"
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="ml-1">Volver</span>
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` }
            alt={ movie.title }
            width={ 500 }
            height={ 750 }
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{ movie.title }</h1>
          <p className="text-xl mb-4">{ movie.tagline }</p>
          <p className="mb-4">{ movie.overview }</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Detalles</h2>
              <p>
                <strong>Fecha de lanzamiento:</strong> { movie.release_date }
              </p>
              <p>
                <strong>Duración:</strong> { movie.runtime } minutos
              </p>
              <p>
                <strong>Calificación:</strong> { movie.vote_average.toFixed(1) } / 10
              </p>
              <p>
                <strong>Géneros:</strong> { movie.genres.map((g) => g.name).join(", ") }
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Reparto principal</h2>
              <ul>
                { movie.credits.cast.slice(0, 5).map(( actor ) => (
                  <li key={ actor.id }>
                    { actor.name } como { actor.character }
                  </li>
                )) }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
