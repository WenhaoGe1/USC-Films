//090db10f0beb02147e9be8f250d5653e
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const path = require('path');

const _app_folder = 'dist/hw8Angular';
const port = process.env.port || 8080;


var request = require('request');

app.use('', express.static(path.join(_app_folder)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hw8Angular/index.html'));
    // res.status(200).send('success').end();
})
app.get('/watch/movie/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hw8Angular/index.html'));
})
app.get('/watch/tv/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hw8Angular/index.html'));
})
app.get('/mylist', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/hw8Angular/index.html'));
})


// app.get('/', function(req, res) {
//     res.status(200).send('success').end();
// })


// ============================================================================================================================================= //
// Nav bar //
app.get('/getSearchResult', async (req, res) => {
    var queryInputString = req.query.inputString;
    var url = 'https://api.themoviedb.org/3/search/multi?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&query=' + queryInputString;
    console.log(queryInputString);
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var resultBody = JSON.parse(body);
            // var returnResult = resultBody.results;
            for (var i = 0; i < resultBody.results.length; i++) {
                if (resultBody.results[i]["media_type"] == "person") {
                    resultBody.results.splice(i, 1);
                    i -= 1;
                }
            }
            res.send(resultBody.results.splice(0, 7));
        }
    })
})


// ============================================================================================================================================= //
// home page //

app.get('/getPlayingMovie', async (req, res) => {
    request('https://api.themoviedb.org/3/movie/now_playing?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/getPopularMovie', async (req, res) => {
    request('https://api.themoviedb.org/3/movie/popular?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/topRatedMovie', async (req, res) => {
    request('https://api.themoviedb.org/3/movie/top_rated?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/trendingMovie', async (req, res) => {
    request('https://api.themoviedb.org/3/trending/movie/day?api_key=090db10f0beb02147e9be8f250d5653e', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getPopularTv', async (req, res) => {
    request('https://api.themoviedb.org/3/tv/popular?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/topRatedTv', async (req, res) => {
    request('https://api.themoviedb.org/3/tv/top_rated?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/trendingTv', async (req, res) => {
    request('https://api.themoviedb.org/3/trending/tv/day?api_key=090db10f0beb02147e9be8f250d5653e', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})






// =============================================================================================================================================//
// detail page //

// =========================Common Case=========================//

app.get('/getCastDetail', async (req, res) => {
    var id = req.query.castId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/person/' + id + '?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getCastExternalId', async (req, res) => {
    var id = req.query.castId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/person/' + id + '/external_ids?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})



// =========================Movie=========================//
app.get('/getMovieVideo', async (req, res) => {
    var id = req.query.movieId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getMovieDetail', async (req, res) => {
    var id = req.query.movieId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/getMovieReviews', async (req, res) => {
    var id = req.query.movieId;
    console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getMovieCast', async (req, res) => {
    var id = req.query.castId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})


// https://api.themoviedb.org/3/movie/464052/recommendations?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1
app.get('/getRecommendedMovie', async (req, res) => {
    var id = req.query.movieId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/recommendations?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

//https://api.themoviedb.org/3/movie/464052/similar?api_key=97588ddc4a26e3091152aa0c9a40de22&language=en-US&page=1
app.get('/getSimilarMovie', async (req, res) => {
    var id = req.query.movieId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})


// =========================TV========================= //
app.get('/getTvVideo', async (req, res) => {
    var id = req.query.tvId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getTvDetail', async (req, res) => {
    var id = req.query.tvId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getTvReviews', async (req, res) => {
    var id = req.query.tvId;
    console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/reviews?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})
app.get('/getTvCast', async (req, res) => {
    var id = req.query.castId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/credits?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/getRecommendedTv', async (req, res) => {
    var id = req.query.tvId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/recommendations?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})

app.get('/getSimilarTv', async (req, res) => {
    var id = req.query.tvId;
    // console.log(id);
    var url = 'https://api.themoviedb.org/3/tv/' + id + '/similar?api_key=090db10f0beb02147e9be8f250d5653e&language=en-US&page=1';
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body).results;
        }
    })
})



app.listen(port, (req, res) => {
    console.log('running at 8080');
});
module.exports = app;
