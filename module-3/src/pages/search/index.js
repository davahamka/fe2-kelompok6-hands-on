import React from "react";
import GiphyItem from "../../components/GiphyItem";
import Header from "../../components/Header";

export default class Search extends React.Component {
  state = {
    data: [],
    error: false,
    search: "",
    isLoading: false,
    limit: "12",
  };

  handleInputSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleOption = (e) => {
    this.setState({ limit: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.search.length <= 0) {
      this.setState({ error: true });
      return;
    }
    this.setState({ isLoading: true });

    this.getDataGif();

    this.setState({ isLoading: false });
    this.setState({ error: false });
  };

  getDataGif = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${this.state.search}&limit=${this.state.limit}`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          data: data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <Header />
        <div className="layout" style={{ marginBottom: "54px" }}>
          <div className="search-box">
            <input
              className={this.state.error ? "invalid" : ""}
              value={this.state.search}
              onChange={this.handleInputSearch}
              placeholder="Search all GIFs and sticker"
            />

            <button onClick={this.handleSubmit}>Search</button>
          </div>
          <div className="limit-box">
            <p>Limit</p>
            <select value={this.state.limit} onChange={this.handleOption}>
              <option>10</option>
              <option>12</option>
              <option>20</option>
              <option>30</option>
            </select>
          </div>
          <p style={{ color: "red" }}>
            {this.state.error
              ? "Maaf kolom input anda kosong. Harap isi terlebih dahulu"
              : ""}
          </p>
          <p>Total data yang dicari ada {this.state.data.length}</p>
          <div className="list-gif">
            {this.state.isLoading ? (
              <div>Loading..</div>
            ) : (
              this.state.data.map((item) => (
                <GiphyItem key={item.id} data={item} />
              ))
            )}
          </div>
        </div>
      </>
    );
  }
}
