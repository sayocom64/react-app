import React, { useState, useEffect } from "react";

const Booklist = (props) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);
  return (
    <div>
      {/* <p>{JSON.stringify(bookData)}</p> */}

      <ul>
        {bookData === null ? (
          <p>now loading...</p>
        ) : (
          bookData.data.items.map((x, index) =>
            x.volumeInfo.readingModes.image === false ? ( // サムネイル有無の判定
              <li key={index}>
                <div>
                  <img
                    src="https://i0.wp.com/kyoheiomi.com/wp-content/uploads/2019/06/5f0354968e64794129567a2b28ddd8d2.png?w=1667&ssl=1"
                    alt="NO IMAGE"
                    style={{ width: "300px" }}
                  />
                </div>
                <h3>【タイトル】{x.volumeInfo.title}</h3>
                <p>(著者：{x.volumeInfo.authors.join("/")})</p>
                <p>{x.volumeInfo.description}</p>
                <hr />
              </li>
            ) : x.volumeInfo.authors === undefined ? ( // 著者有無の判定
              <li key={index}>
                <div>
                  <a href={x.volumeInfo.infoLink} target="blank">
                    <img
                      src={x.volumeInfo.imageLinks.thumbnail}
                      alt={x.volumeInfo.title}
                    />
                  </a>
                </div>
                <h3>【タイトル】{x.volumeInfo.title}</h3>
                <p>著者不明</p>
                <p class="details">{x.volumeInfo.description}</p>
                <hr />
              </li>
            ) : (
              <li key={index}>
                <div>
                  <a href={x.volumeInfo.infoLink} target="blank">
                    <img
                      src={x.volumeInfo.imageLinks.thumbnail}
                      alt={x.volumeInfo.title}
                    />
                  </a>
                </div>
                <h3>【タイトル】{x.volumeInfo.title}</h3>
                <p>(著者：{x.volumeInfo.authors.join("/")})</p>
                <p class="details">{x.volumeInfo.description}</p>
                <hr />
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
};
export default Booklist;
