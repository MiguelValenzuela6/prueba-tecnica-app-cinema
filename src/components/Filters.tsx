import type React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setGenreFilter,
  setYearFilter,
  setRatingFilter,
  clearFilters,
} from "../store/slices/filtersSlice"
import { useGetGenresQuery } from "../store/services/movieApi"
import type { RootState } from "../store/store"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  const { genre, year, rating } = useSelector((state: RootState) => state.filters)
  const { data: genres } = useGetGenresQuery()

  const ratingOptions = [
    { value: "0", label: "Todos los ratings" },
    { value: "1", label: "1 estrella" },
    { value: "2", label: "2 estrellas" },
    { value: "3", label: "3 estrellas" },
    { value: "4", label: "4 estrellas" },
    { value: "5", label: "5 estrellas" },
    { value: "6", label: "6 estrellas" },
    { value: "7", label: "7 estrellas" },
    { value: "8", label: "8 estrellas" },
    { value: "9", label: "9 estrellas" },
    { value: "10", label: "10 estrellas" },
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 50 }, (_, i) => currentYear - i)

  return (
    <nav className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Filtro</h2>
        <Select
          value={`${genre ?? 0}`}
          onValueChange={(value) => dispatch(setGenreFilter(Number.parseInt(value)))}
        >
          <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
            <SelectValue placeholder="Género" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 border-neutral-800">
            {/* Valor por defecto: 0 representa "Todos los géneros" */}
            <SelectItem value="0">Todos los géneros</SelectItem>
            {genres?.genres.map((genre) => (
              <SelectItem key={genre.id} value={`${genre.id}`}>
                {genre.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Select
          value={`${year ?? 0}`}
          onValueChange={(value) => dispatch(setYearFilter(Number.parseInt(value)))}
        >
          <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
            <SelectValue placeholder="Año" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 border-neutral-800">
            {/* Valor por defecto: 0 representa "Todos los años" */}
            <SelectItem value="0">Todos los años</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={`${year}`}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Select
          value={`${rating ?? 0}`}
          onValueChange={(value) => dispatch(setRatingFilter(Number.parseInt(value)))}
        >
          <SelectTrigger className="w-full bg-neutral-900 border-neutral-800 text-white">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>
          <SelectContent className="bg-neutral-900 border-neutral-800">
            {ratingOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator className="bg-neutral-800" />
      <Button
        variant="outline"
        className="w-full bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800"
        onClick={() => dispatch(clearFilters())}
      >
        <X className="mr-2 h-4 w-4" /> Limpiar filtros
      </Button>
    </nav>
  )
}

export default Filters
