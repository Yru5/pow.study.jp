from flask import Flask,request,render_template

app = Flask(__name__, static_folder='.', static_url_path='')


@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

@app.route('/',methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        f = open('結果まとめ.csv', 'a')
        f.write(request.form["pbtn"]+','+request.form["pcate"]+','+request.form["gen"]+','+request.form["age"]+','+request.form["s3"]+'\n')
        f.close()
        return render_template('wordtest.html')
    else:
        return render_template('wordtest.html')
if __name__ == '__main__':
    app.run(debug =True)