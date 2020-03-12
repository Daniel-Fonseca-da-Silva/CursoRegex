package Caracteres;

import java.util.regex.*;

public class OlaRegex {

    public static void main(String[] args) {

        final String texto = "Casa bonita é casa amarela da esquina com a Rua ACASALAR.";

        Pattern patternLetras = Pattern.compile("a b");

        Matcher matcher = patternLetras.matcher(texto);

        while(matcher.find())
        {
            System.out.printf("Posicoes: %s, %s %nValor: %s%n",
            matcher.start(), matcher.end(), matcher.group());
        }

        System.out.println(texto.replaceAll("a b", "!"));

    }

}