import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <div className="row justify-content-center">
            {movies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
}
