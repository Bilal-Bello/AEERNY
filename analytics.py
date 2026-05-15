import os

snippet = """<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2C4CYMBYQ4"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2C4CYMBYQ4');
</script>"""

folder = "."  # run this script from your project root folder

for filename in os.listdir(folder):
    if filename.endswith(".html"):
        with open(filename, "r", encoding="utf-8") as f:
            content = f.read()
        if "G-2C4CYMBYQ4" not in content:
            content = content.replace("<head>", "<head>\n" + snippet, 1)
            with open(filename, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"✅ Added to {filename}")
        else:
            print(f"⏭️ Skipped (already has it): {filename}")

print("Done!")