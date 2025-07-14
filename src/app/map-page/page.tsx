import Link from "next/link"


export default function Home() {
    return (
        <form action="">
            <div className="search-form">
                <button type="submit" aria-label="検索"></button>
                <label>
                    <input type="text" placeholder="検索"></input>
                </label>
            </div>
            <div className="map-container">
                <div className="map-content">
                    <div className="map-sheet"></div>
                </div>
                <div className="map-content">
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                </div>
                <div className="map-content">
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                </div>
                <div className="map-content">
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                </div>
                <div className="map-content">
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                </div>
                <div className="map-content">
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                    <div className="map-sheet"></div>
                </div>
            </div>
        </form>
    )
}