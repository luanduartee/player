import MusicList from "../components/data-display/MusicList/MusicList";

const musics = [
    {
        id: 1,
        name: 'Greedy',
        artist: 'Tate McRae',
        Time: 95
    },
    {
        id: 2,
        name: 'Cut My Hair',
        artist: 'Tate McRae',
        Time: 100

    }
]

export default function Index() {
    return (
        <div>
            <MusicList
                musics={musics}
                SelectedMusic={musics[0]}
                OnSelect={() => { }}
            />
        </div>
    )
}