from flask import Flask,request,render_template

app = Flask(__name__, static_folder='.', static_url_path='')
@app.route('/',methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        f = open('結果まとめ.txt', 'a')
        f.write(request.form["pbtn"]+','+request.form["pcate"]+','+request.form["gen"]+','+request.form["age"]+','+request.form["s3"]+'\n')
        f.close()
        return render_template('wordtest.html')
    else:
        return render_template('wordtest.html')

app.run(port=8000, debug=True)
